import os
import sys
import datetime
import threading
import re

def log_info(message):
    timestamp = datetime.datetime.now()
    print '%s-INFO-%s' % (timestamp, message)

class Finder(object):
    def __init__(self, root_path):
        self.root_path = root_path

    def __iter__(self):
        for root, dirs, files in os.walk(self.root_path):
            for file in files:
                fullname = root + '/' + file
                yield fullname

class Worker(threading.Thread):
    def __init__(self, filenames):
        super(Worker, self).__init__()
        self.filenames = filenames

    def run(self):
        log_info('worker started')
        while True:
            try:
                filename = self.filenames.pop(0)
                if self.filter(item=filename) == True:
                    if self.check(item=filename) == True:
                        log_info('hello found at: %s' % filename)
            except Exception:
                log_info('error, file list is empty')

    def filter(self, item):
        REGEX = re.compile('^.+\.txt$')
        if re.match(REGEX, item):
            return True
        else:
            return None

    def check(self, item):
        file = open(item)
        text = file.read()
        if 'hello' in text:
            return True

def main(argv):
    if len(argv) <= 1:
        log_info('insufficient arguments, please provide a directory as a starting point')
        sys.exit(0)

    log_info('started')

    filenames = []

    w = Worker(filenames=filenames)
    w.daemon = True
    w.start()

    finder = Finder(root_path=sys.argv[1])
    for filename in finder:
        filenames.append(filename)

    log_info('done')

main(sys.argv)
