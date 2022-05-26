#!/bin/zsh


for filename in dual-light/*.svg; do
    [ -e "$filename" ] || continue

    iconName=$(basename $filename .svg)
    newFileName=dual-light/$(basename $filename .svg).tsx

    importStr="import { memo, ReactElement, SVGProps } from 'react'; export const $iconName = memo((props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {return ("
    endOfFile=");});"


    currentContents=$(cat $filename)
    echo "Old: $filename"
    echo "New: $newFileName"
    echo "Contents: $currentContents"
  
    echo "$importStr$currentContents$endOfFile" > $newFileName
done