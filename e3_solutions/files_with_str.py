#!/usr/bin/python
# -*- coding: utf-8 -*-
__author__ = "Michel Moreau"
__copyright__ = "Copyright 2016, Michel Moreau"
__license__ = "MIT"
__maintainer__ = "Michel Moreau"
__email__ = "michmoreau.l@gmail.com"
__status__ = "Development"

import datetime
import mmap
import os
import re
import sys
import time

def raise_signature_errors(path, search_str):
    if isinstance(path, basestring) == False or isinstance(search_str,
            basestring) == False:
        raise ValueError('''Provide two string arguments along with this function:
1) a path to a searchable directory (string)
2) a string to search for in all files of the directory and subdirectories (string)
''')

    if os.path.exists(path) == False:
        raise ValueError('Provide an existing path as first argument (string)')


def log_files_with_str(path, search_str):
    raise_signature_errors(path, search_str)

    print "\nFiles containing string \'" + search_str + "\' in path:", \
        path
    file_count_total = 0
    file_count_with_str = 0
    for (root, _, files) in os.walk(path):
        for file_name in files:
            file_count_total += 1
            file_path = os.path.join(root, file_name)
            with open(file_path, 'r+b') as f:
                map = mmap.mmap(f.fileno(), 0, prot=mmap.PROT_READ)
                if re.search(search_str, map, flags=re.I):
                    file_count_with_str += 1
                    print file_path
    if file_count_with_str == 0:
        print 'NONE'

    print '\nTotal number of files analyzed :', file_count_total
    print "Total number of files containing string \'" + search_str \
        + "\':", file_count_with_str


def get_files_with_str(path, search_str):
    raise_signature_errors(path, search_str)

    files_with_str = []
    for (root, _, files) in os.walk(path):
        for file_name in files:
            file_path = os.path.join(root, file_name)
            with open(file_path, 'r+b') as f:
                map = mmap.mmap(f.fileno(), 0, prot=mmap.PROT_READ)
                if re.search(search_str, map, flags=re.I):
                    files_with_str.append(file_path)

    return files_with_str


if __name__ == '__main__':
    try:
        start_time = time.time()
        start_date = datetime.datetime.now()
        log_files_with_str(sys.argv[1], sys.argv[2])

        print '\nProgram started', 'on', start_date
        print 'Program completed', 'in', time.time() - start_time, \
            'seconds\n'
    except IndexError:

        raise ValueError('''Provide two string arguments along with this function:
1) a path to a searchable directory (string)
2) a string to search for in all files of the directory and subdirectories (string)
''')


			
