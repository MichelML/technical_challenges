#!/usr/bin/python
# -*- coding: utf-8 -*-

import datetime
import os
import re
import sys
import time


def find_files_with_str(path='.', search_str='hello'):
    start_time = time.time()
    start_date = datetime.datetime.now()


    if isinstance(path, basestring) == False or isinstance(search_str, basestring) == False:
        raise ValueError(("Provide two string arguments along with this function:\n"
                          "1) a path to a searchable directory (string)\n"
                          "2) a string to search for in all files of the directory and subdirectories (string)\n"))

    if os.path.exists(path) == False:
        raise ValueError('Provide an existing path as first argument (string)')


    print "\nFiles containing string \'" + search_str + "\' in path:", path
    file_count_total = 0
    file_count_with_str = 0
    for (root, subdir, files) in os.walk(path):
        for file_name in files:
            file_count_total += 1
            file_path = os.path.join(root, file_name)
            if re.match(search_str, open(file_path).read(), flags=re.I):
                file_count_with_str += 1
                print file_count_with_str, '.', os.path.join(root,
                        file_name)
    if file_count_with_str == 0:
        print 'NONE'

    print '\nTotal number of files analyzed :', file_count_total
    print "Total number of files containing string \'" + search_str \
        + "\':", file_count_with_str
    print '\nProgram started', 'on', start_date
    print 'Program completed', 'in', time.time() - start_time, \
        'seconds\n'


if __name__ == '__main__':
    try:
        find_files_with_str(sys.argv[1], sys.argv[2])
    except IndexError:
        raise ValueError(("Provide two string arguments along with this function:\n"
                          "1) a path to a searchable directory (string)\n"
                          "2) a string to search for in all files of the directory and subdirectories (string)\n"))

