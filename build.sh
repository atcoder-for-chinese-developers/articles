mkdir commitInfo;

for f in $(find src -type f); do
    filename=$(basename $f);
    if [[ "$filename" != "README.md" ]]; then continue; fi
    dir=$(dirname $f);
    echo "Generating commitInfo/"$dir"/commitInfo.json";
    mkdir -p commitInfo/$dir;
    git log --format="{\"id\": \"%H\", \"short\": \"%h\", \"date\": \"%cI\"}" $dir | head -1 > commitInfo/"$dir"/commitInfo.json;
done

for dir in src/*; do
    mkdir -p commitInfo/$dir;
    git log --format="{\"id\": \"%H\", \"short\": \"%h\", \"date\": \"%cI\"}" $dir | head -1 > commitInfo/"$dir"/commitInfo.json;
done

git log --format="{\"id\": \"%H\", \"short\": \"%h\", \"date\": \"%cI\"}" . | head -1 > commitInfo/commitInfo.json;

#node build.js

#rm -rf commitInfo;

if [ -d $STATIC_DIR -a $STATIC_DIR ]; then
    \cp -r $STATIC_DIR/* dist
fi;
