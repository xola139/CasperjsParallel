#!/bin/bash

/usr/local/bin/parallel --bar -a links.txt casperjs getTitle.js
#cat scraped_data/*.txt > elements.txt
