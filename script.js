var names=new Array();
names[0]="krishna";
names[1]="john";
names[2]="vaishnavi";
names[3]="jamuna";
names[4]="sanjay";
names[5]="ambuja";
names[6]="Jack";
names[7]="lavanya";
names[8]="saniya";
names[9]="suprith";
names[10]="Jessica";

for(var i=0;i<names.length;i++)
{
    if(names[i].charAt(0)==='J'||names[i].charAt(0)==='j')
    {
        console.log("Goodbye"+" "+names[i])
    }
    else
    {
        console.log("Hello"+" "+names[i])
    }
}