(() => {
    const map = new fabric.Canvas('map', {
        backgroundColor: 'rgba(0,0,0,.1)',
        selectionColor: '',
        selectionLineWidth: 2
    })
    const ball = new fabric.Circle({
      radius:20,fill:'blue',left:100,top:480
    })
    const basket = new fabric.Ellipse({
      angle:45,fill:'black',
      height:50,width:100,
      right:100,top:50,
      color:'blue'
    })
    const title = new fabric.IText('hello world',{
      left:100,top:200,color:'black'
    })
    // const basketball = new fabric.Image.fromURL('./img/basketball.png')
    map.add(ball,basket,title)
})()
