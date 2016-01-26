
#!/bin/bash
# Скрипт инициализации проекта.

# https://user.xmission.com/~emailbox/ascii_cats.htm
echo "             *     ,MMM8&&&.            *
                  MMMM88&&&&&    .
                 MMMM88&&&&&&&
     *           MMM88&&&&&&&&
                 MMM88&&&&&&&&
                 'MMM88&&&&&&'
                   'MMM8&&&'      *
          |\___/|
          )     (             .              '
         =\     /=
           )===(       *
          /     \
          |     |
         /       \
         \       /
  _/\_/\_/\__  _/_/\_/\_/\_/\_/\_/\_/\_/\_/\_
  |  |  |  |( (  |  |  |  |  |  |  |  |  |  |
  |  |  |  | ) ) |  |  |  |  |  |  |  |  |  |
  |  |  |  |(_(  |  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
  jgs|  |  |  |  |  |  |  |  |  |  |  |  |  |"

echo "##############################"
echo "Install server packages (npm):"
echo "##############################"
npm install
echo "##############################"
echo "Install client packages (bower):"
echo "##############################"
bower install

if [ "$1" = "import" ];
then
    echo "##############################"
    echo "Import dump:"
    echo "##############################"
    exec bin/importDump.sh ./dump.sql
fi

echo "##############################"
echo "Run migrations:"
echo "##############################"
exec bin/migrateUp.sh
echo "##############################"
echo "Init Donald Trump"
echo "##############################"
echo "Done."
echo "Now, lets play:"
echo "
    $ npm start
"
