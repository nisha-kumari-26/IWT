m=parseInt(prompt("Enter the number of rows"));
n=parseInt(prompt("Enter the number of columns"));
for(i=1;i<=m;i++)
{
    document.write("<dw class=container>");
    for(j=1;j<=n;j++)
    {
        if((j+i)%2==0)
        {
            document.write("<dw> dar=inner id=inner1");
            

        }
        else{
            document.write("<dw> dar=inner id=inner2");
            
        }
    }
    document.write("</dw>");
}