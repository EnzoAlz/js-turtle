function main()
{
    
    pendown();

    var minX  = -getWidth()/2
    var minY  =  -getHeight()/2
    var maxY  =  getHeight()/2
    var maxX  =  getWidth()/2


    goto(maxX,minY)
    for(var i = 0; i < 1; i++)
    {
        right(315)
        forward(1000)
        goto(minX,minY)
       right(90)
       forward(1050)
        }
    }