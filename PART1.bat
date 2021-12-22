PART1
zekebaldwin@LAPTOP-59KKSPN0:~$ mkdir ffiirst
zekebaldwin@LAPTOP-59KKSPN0:~$ cd ffiirst
zekebaldwin@LAPTOP-59KKSPN0:~/ffiirst$ touch person.txt
zekebaldwin@LAPTOP-59KKSPN0:~/ffiirst$ mv person.txt another.txt
zekebaldwin@LAPTOP-59KKSPN0:~/ffiirst$ cp another.txt copy.txt
zekebaldwin@LAPTOP-59KKSPN0:~/ffiirst$ ls
another.txt  copy.txt
zekebaldwin@LAPTOP-59KKSPN0:~/ffiirst$ cp -R /ffiirst /second
cp: cannot stat '/ffiirst': No such file or directory
zekebaldwin@LAPTOP-59KKSPN0:~/ffiirst$ cp -R ffiirst second
cp: cannot stat 'ffiirst': No such file or directory
zekebaldwin@LAPTOP-59KKSPN0:~/ffiirst$ cd ..
zekebaldwin@LAPTOP-59KKSPN0:~$ ls
clear  ffiirst  ffirst  first  learn_git_again
zekebaldwin@LAPTOP-59KKSPN0:~$ cp -R ffiirst second
zekebaldwin@LAPTOP-59KKSPN0:~$ ls
clear  ffiirst  ffirst  first  learn_git_again  second
zekebaldwin@LAPTOP-59KKSPN0:~$ rm second
rm: cannot remove 'second': Is a directory
zekebaldwin@LAPTOP-59KKSPN0:~$ rmdir seconnd
rmdir: failed to remove 'seconnd': No such file or directory
zekebaldwin@LAPTOP-59KKSPN0:~$ rmdir second
rmdir: failed to remove 'second': Directory not empty
zekebaldwin@LAPTOP-59KKSPN0:~$ rmdir -r second
rmdir: invalid option -- 'r'
Try 'rmdir --help' for more information.
zekebaldwin@LAPTOP-59KKSPN0:~$ rm -r second
zekebaldwin@LAPTOP-59KKSPN0:~$ ls
clear  ffiirst  ffirst  first  learn_git_again
zekebaldwin@LAPTOP-59KKSPN0:~$


PART 2
1.) the man command makes it so you can the name and what the fuction does. you can get out by pressing q
2.)-a means do not ignore entries starting with a .  
3.)ctrl then left or right arrow keys 
4.)ctrl + e
5.)ctrl + a 
6.)ctrl + r 
7.)terminal can have mulyiple tabs and different profiles running, and interacts with the shell and shell is what is used for operating a computers OSS
8.)an absolute path goes strait down the file system into the same specific file everytime
9.)a relative path goes from on place to another with could change depending on the deletion or additon of new directories and files
10.)a flag is something that adds to a command and gives it another action such as -b -d and -l
11.) the r flag removes a directory, the f flag removes by force