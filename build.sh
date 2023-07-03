mkdir commitInfo;

for f in $(find src -type f); do
    filename=$(basename $f);
    if [[ "$filename" != "README.md" ]]; then continue; fi
    dir=$(dirname $f);
    echo "Generating commitInfo/"$dir"/commitInfo.json";
    mkdir -p commitInfo/$dir;
    git log --format="{\"id\": \"%H\", \"short\": \"%h\", \"date\": \"%cI\"}" $dir | head -1 > commitInfo/"$dir"/commitInfo.json;
done

git log --format="{\"id\": \"%H\", \"short\": \"%h\", \"date\": \"%cI\"}" . | head -1 > commitInfo/commitInfo.json;

node build.js

rm -rf commitInfo;

#mkdir commitInfo
#for f in src/*; do
#    git log --format="{\"id\": \"%H\", \"short\": \"%h\", \"date\": \"%cI\"}" $f | head -1 > ${f/src\//commitInfo\/}.json
#done
#git log --format="{\"id\": \"%H\", \"short\": \"%h\", \"date\": \"%cI\"}" | head -1 > commitInfo/global.json