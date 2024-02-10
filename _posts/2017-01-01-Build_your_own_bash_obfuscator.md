---
layout: post
title: Build Your Own Bash Obfuscator
tags:
  - Bash
  - Hacking
  - Linux
lang: en
categories: [  tutorial ]
author: Daniel Vera
image: assets/images/4.jpg
---

##### Note: The steps described in this tutorial were applied on UNIX-based operating systems.

## Introduction:
In this guide, we will walk through the process of building your own obfuscator in Bash. Obfuscation is the practice of deliberately making code more difficult to understand, often to protect intellectual property or deter reverse engineering. We'll explore various techniques to achieve this goal using Bash scripting.

## Motivation
Some time ago, I found myself in need of creating an obfuscator that would allow me to run Bash applications on a server without the source code being evident or easy to understand for end users. It wasn't a cryptographic innovation, but it served my purpose.

There are some good open-source alternatives that can be used to obfuscate scripts, but personally, they didn't help me. Either because they were C compilers that require compilation on the target machine, or the Bash obfuscators I found didn't respect line breaks, spaces, etc...

## Obfuscators

An obfuscator is a program that takes the content of a file (usually with source code) and rewrites it in such a way that it is difficult for the human eye to understand but still executable or interpretable by the machine. I must clarify that this degrades the performance of your application since certain portions of the code need to be deciphered and then interpreted. Additionally, it tends to be insecure because it requires invoking the "eval" function or method, and in most programming languages, there is the premise: "eval is evil", as you would be exposing yourself to serious security flaws if you don't know what you're doing.


Example of obfuscation in JavaScript using: https://www.obfuscator.io/


```bash
// Paste your JavaScript code here

function hi() {

  console.log("Hello World!");

}

hi(); 
```

This is how it looks with an obfuscation algorithm:

```bash
function _0x3ec8(_0x296d7c,_0x2693b2){var _0x5613e7=_0x5613();return _0x3ec8=function(_0x3ec8e4,_0x401d60){_0x3ec8e4=_0x3ec8e4-0x6d;var _0x19ddc2=_0x5613e7[_0x3ec8e4];return _0x19ddc2;},_0x3ec8(_0x296d7c,_0x2693b2);}(function(_0x41232c,_0xebe4dc){var _0x3342e0=_0x3ec8,_0x40c3c7=_0x41232c();while(!![]){try{var _0x32d38b=-parseInt(_0x3342e0(0x6e))/0x1+parseInt(_0x3342e0(0x74))/0x2*(-parseInt(_0x3342e0(0x77))/0x3)+-parseInt(_0x3342e0(0x70))/0x4+-parseInt(_0x3342e0(0x76))/0x5*(parseInt(_0x3342e0(0x73))/0x6)+-parseInt(_0x3342e0(0x75))/0x7*(-parseInt(_0x3342e0(0x72))/0x8)+parseInt(_0x3342e0(0x6f))/0x9+parseInt(_0x3342e0(0x71))/0xa;if(_0x32d38b===_0xebe4dc)break;else _0x40c3c7['push'](_0x40c3c7['shift']());}catch(_0xf65114){_0x40c3c7['push'](_0x40c3c7['shift']());}}}(_0x5613,0x59530));function hi(){var _0xb4568e=_0x3ec8;console['log'](_0xb4568e(0x6d));}function _0x5613(){var _0x3f2f47=['1774328LjslCb','12zuPtpB','86006GRGAVr','14XwSEoS','1291735TXNvTp','15KiTYuV','Hello\x20World!','655804PBgVaU','2602566hXhSme','882660GBsfGs','12412940HmFyOD'];_0x5613=function(){return _0x3f2f47;};return _0x5613();}hi();
```

### Creating your own obfuscator in bash

#### Note: Never use eval, it's super dangerous. Do not use this script for production as it is extremely unsafe. Proceed only if you know what you're doing or understand the risks.

The obfuscator will read the target script, divide the content into blocks, generate variables, perform a kind of compression, and add redundancy.
When our obfuscated script is executed, it will generate the clear version in the /tmp directory, then load that version into memory interpreting the generated sections, and finally delete the generated file.
To finish, we will add a beautiful banner to give style to our obfuscator.

What makes an obfuscator an obfuscator:

Generates long variable names with meaningless long names, as they are usually used as binary, hexadecimal, etc., identifiers.
There is a lot of redundancy; the code is decoded or decrypted using a long stack of function calls.
Abuses eval: an obfuscator wouldn't be an obfuscator if we didn't abuse eval.
Symmetrical transformations, that is, our purpose is to make it difficult to read and understand, but there will always be a way to reverse the source code.

Tools required to run the obfuscator:

- figlet
- bash
- base64
- gunzip
- perl
- dbus-uuidgen
- basename
- cat
- aw

Tools required to execute the obfuscated code:

- awk
- gunzip
- base64
- bash
- tail
- eval

### Defining the structure of the obfuscated file

The obfuscated file we are going to generate is inspired by the technique used by self-executing installers in bash in the Linux world.

The obfuscated executable consists of two parts:

```
||||||||||||||||||||||||||||||||||||||||||||||||||||||||
|||||| INITIAL BASH CODE

|||||| MARKER

|||||| COMPRESSED CODE
||||||||||||||||||||||||||||||||||||||||||||||||||||||||
```

- The marker is an explicitly placed delimiter to help the interpreter locate the parts that need to be processed. All content found after the marker will be considered compressed data.

- The initial code has the function of loading and decompressing the obfuscated block.
- The compressed code is data represented in base64 that is subjected to compression with gzip.

## Implementation

Before continuing, I present the final code for reference, as otherwise, you wouldn't have a guide to what I'm going to explain.


**obs.sh**

```bash
 #!/bin/bash


output=$3
filex=tmpmainfile.sh
echo $"$(cat $2)" > $filex
banner=$(figlet "$1" | gzip | base64)
banner="base64 -d <<<\"$banner\" | gunzip"
key="# ===BANNER==="
perl -i -pe  "s@$key@$banner@gms" ${filex}


currentDir=$(dirname "$0")
cp $currentDir/template.sh $output


funcaname="xf"$(dbus-uuidgen)
barridoName="b"$(dbus-uuidgen)
markerName="m"$(dbus-uuidgen)
markerNameVar="m"$(dbus-uuidgen)


echo -n $markerNameVar"=\$(awk '/^___"$markerName"___/ {print NR+1; exit 0; }' \"\${0}\");" >> $output
echo -n $barridoName"=\$(tail -n+\${"$markerNameVar"} \"\${0}\");" >> $output


echo "" >> $output
echo 'function '$funcaname'(){' >> $output
echo 'echo $(base64 -d <<< "$1"| gunzip);' >> $output
echo '}' >> $output


REGX=()
IN=$(cat $filex)
while IFS=$'\n' read -ra ADDR; do
  for i in "${ADDR[@]}"; do
    varxxa="X02D"$(dbus-uuidgen)
    cz=$(echo $"$i" | tr -d '\0'| gzip| base64 )
    echo -n $varxxa"=\$($funcaname \"$cz\");" >> $output
    REGX+=($varxxa)
  done
done <<< "$IN"


echo -n $"pbv921=\$(eval \"echo \$\\\"\$"$barridoName"\\\"\");" >> $output
echo -n "b17320=\"\$(cat \${0})\";" >> $output
echo -n "echo \$\"\$pbv921\" > \${0};" >> $output
echo -n "echo \$\"\$(\${0} \${@})\" && echo \$\"\$b17320\" > \${0};" >> $output


echo "exit 0;"  >> $output
echo "___"$markerName"___" >> $output
for i in "${REGX[@]}"; do
  echo -n "$"$i"\$z" >> $output
done
echo -n "\"\"" >> $output
rm $filex &2>/dev/null
```

###  Usage 
```bash
sudo chmod u+x ./obs.sh

./obs.sh  "BANNER" "code_to_obfuscate.sh" "output_file.sh"
```

###  Template.sh 

Create this file next to obs.sh with the name template.sh

```bash
#!/bin/bash


z="


"; 
```

download here: https://gist.github.com/DanyelMorales/63ea7925734f7abb01fae3f4f5ee9441


## Generating Compressed Code

The obfuscator needs to read the original script and divide it into pieces to subsequently transform and manipulate each line. To do this, we will choose a character to serve as a separator, in my case, I chose the line break (Line Break Char \n). Each portion of the file will be assigned to a variable that will be added to an output file.

In summary:

- Read the original file.
- Split the content using the line break symbol (\n).
- Each snippet will be stored in a new variable.
- The new variables will be stored in a new file (the obfuscated file).
- To increase confusion, our final file will be minified.

```bash
IN=$(cat "input.sh")
output="obfuscated.sh"
while IFS=$'\n' read -ra ADDR; do
  for i in "${ADDR[@]}"; do
    varxxa="var"$(dbus-uuidgen)
    echo -n $varxxa"=$i" >> $output
  done
done <<< "$IN" 
```

Explanation:
- "IN" reads the file we want to obfuscate.
- "output" is the name of the final file.
- "while IFS.. done <<< $IN" allows us to read a file using \n as a block separator. Each block of text will be stored in the variable ADDR. A block of text can have one or more lines.
- "for i in..." allows us to iterate over the lines of the extracted block.
- "varxxa" generates the name of the variables that our obfuscator will use to create mental confusion. We use uuid to generate a unique id.
- "echo -n $varxxa..." assigns to the generated variable the content of the trimmed block and stores it in the destination file.


The above code has a flaw: each line of the block is in plain text. To fix this, we will use gzip compression. Now the output of gzip is not easy to handle since it contains hidden special characters, so the next step would be to use base64 to store the result in the destination file.

```bash
funcaname="xf"$(dbus-uuidgen)
echo "" >> $output
echo 'function '$funcaname'(){' >> $output
echo 'echo $(base64 -d <<< "$1"| gunzip);' >> $output
echo '}' >> $outputt

```

You'll notice that we've added echo -n $varxxa"=\$($funcaname \"$cz\"); This line dynamically invokes the function that will decompress the base64 text. For this to work, we must declare the function beforehand (the function name is generated randomly) and save it in the destination file.

### Marker

The obfuscated file, once executed, will start by reading its own content with the clear purpose of searching for the marker. All content after the marker will be considered compressed code. To achieve this, we use awk to sweep the obfuscated file line by line from the marker to the end of the file (EOF).

This block dynamically generates the marker and the logic to detect the compressed part, variables are generated, all of this is saved in the obfuscated destination file:

```bash
barridoName="b"$(dbus-uuidgen)
markerName="m"$(dbus-uuidgen)
markerNameVar="m"$(dbus-uuidgen)

echo -n $markerNameVar"=\$(awk '/^___"$markerName"___/ {print NR+1; exit 0; }' \"\${0}\");" >> $output
echo -n $barridoName"=\$(tail -n+\${"$markerNameVar"} \"\${0}\");" >> $output

# barridoName contains the name of the variable that will store the compressed content once the obfuscator detects the marker.
# markerNameVar is the name of the variable that will store the line of code where the marker is located.
# markerName is the delimiter or marker dynamically generated by the obfuscator.

```

The next section will cause the program to terminate before reaching the marker line. Then it will print the delimiter and all compressed blocks at the end of the destination file.

```bash
echo "exit 0;"  >> $output
echo "___"$markerName"___" >> $output
for i in "${REGX[@]}"; do
  echo -n "$"$i"\$z" >> $output
done
echo -n "\"\"" >> $output
rm $filex &2>/dev/nullt

# rm $filex &2>/dev/null: This line will cause the obfuscated file to delete temporary data created in the tmp folder.

```

#### Initial Bash Code

The initial code has the function of loading and decompressing the obfuscated block. All content found after the marker will be considered compressed data. You'll notice that the marker is an explicitly placed delimiter to help the interpreter locate the parts that need to be processed:

```bash
echo -n $"pbv921=\$(eval \"echo \$\\\"\$"$barridoName"\\\"\");" >> $outpu
echo -n "b17320=\"\$(cat \${0})\";" >> $output
echo -n "echo \$\"\$pbv921\" > \${0};" >> $output
echo -n "echo \$\"\$(\${0} \${@})\" && echo \$\"\$b17320\" > \${0};" >> $output

# We use eval to evaluate the decompressed code, with its content stored in the variable named in barridoName.
```

#### Adding a Banner to Our Obfuscated File

figlet helps us in this task; we use this tool by passing it the text of the banner defined in the argument $1 of our obfuscator. Oh, look, more compression and ambiguous content in our obfuscated file!

```bash
filex=tmpmainfile.s
echo $"$(cat $2)" > $filex
banner=$(figlet "$1" | gzip | base64)
banner="base64 -d <<<\"$banner\" | gunzip"
key="# ===BANNER==="
perl -i -pe  "s@$key@$banner@gms" ${filex}h

# We practically replace the placeholder marker "===BANNER===" with the content from figlet, this after decompressing it.

```