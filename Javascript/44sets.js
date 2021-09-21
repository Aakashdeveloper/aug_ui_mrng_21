var set1 = new Set([10,20,40,60])
set1
Set(4) {10, 20, 40, 60}

var set2 = new Set(['Hi','Hey',"hello",'Hi'])
set2
Set(3) {"Hi", "Hey", "hello"}

var getEntriesArry = set2.entries();
getEntriesArry.next().value
(2) ["Hi", "Hi"]
getEntriesArry.next().value
(2) ["Hey", "Hey"]
getEntriesArry.next().value
(2) ["hello", "hello"]