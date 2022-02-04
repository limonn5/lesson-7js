let btr = document.createElement('div')//создает елемент
btr.classList = ('button')
btr.innerHTML = `<p>Click on me</p>` //inner добавляет HTML

let block = document.createElement('div')
block.classList = ('block')// добваляет класс блоку

let body = document.querySelector('body')//находит елемент

body.append(btr)//добавляет в дом дерева. в данном случае помещяет его в боди
body.append(block)

let color = [ 'red', 'green', 'blue']

btr.addEventListener('click',() => createColor())

let index = 0
function createColor() {
    if(index >2 ){
        index=0
    }
   let box = document.querySelector('.block')//что бы найти класс необходимо поставить точку в начале елемента
   box.style.backgroundColor = color[index]
   index++
   color.log(index)
}