# files_with_str.py
This script helps you find all files containing a pre-specified string inside a choosen directory.

## Quick start
You can try the script via your commandline with the following command:  

```  
python files_with_str.py <path to a directory> <string to search for>
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

You can also use it as a module in other programs.


