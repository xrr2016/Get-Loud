(() => {
    const map = new fabric.Canvas('map', {
        backgroundColor: 'rgba(0,0,0,.2)',
        selectionColor: 'blue',
        selectionLineWidth: 2
    })
    const ball = new fabric.Circle({
      radius:20,fill:'blue',left:100,top:120
    })
    const basketball = new fabric.Image.fromURL('./img/basketball.png')
    map.add(basketball)
    map.add(ball)
})()
