# [files_with_str.py](https://github.com/MichelML/technical_challenges/blob/master/e3_solutions/files_with_str.py)
This [script](https://github.com/MichelML/technical_challenges/blob/master/e3_solutions/files_with_str.py) helps you find all files containing a pre-specified string inside a choosen directory.   

N.B. The script works only with python version 2.* for now.

## Quick start
You can try the script via your commandline with the following command:  

```  
$ python files_with_str.py <path to a directory> <string to search for>
```  

#### example
```  
$ python files_with_str.py . hello

# example output
Files containing string 'hello' in path: .
./README.txt
./test.py
./dir/a/1.txt
./dir/b/4.txt
./dir/b/5.txt

Total number of files analyzed : 13
Total number of files containing string 'hello': 5

Program started on 2016-11-28 12:15:51.360015
Program completed in 1.25089502335 seconds
```

You can also use it as a module in other programs. Functions available are:

1. `log_files_with_str(path, search_str)` # only logs each file to the console (see [example](https://github.com/MichelML/technical_challenges/blob/master/e3_solutions/files_with_str.md#example)) 
2. `get_files_with_str(path, search_str)` # returns an array of strings representing the full path to each file

See [files_with_str.py](https://github.com/MichelML/technical_challenges/blob/master/e3_solutions/files_with_str.py) for more details on each function.

# Standard library modules utilized

- datetime
- mmap
- os
- re
- sys
- time

# LICENSE 
Copyright (c) 2016 Michel Moreau

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



