export function createNode(value, next = null) {
  return { value: value, next: next }
}
export default class LinkedList {
  constructor() {
    // head - сылка на узел вначале списка
    // tail - сылка на узел в конце списка
    this.head = null
    this.tail = null
  }
  /*
    1. Получить значение и создать новый узел
    2. Поставить этот узел в head
    3. Если это один узел, то поставить его в tail
    4. return LinkedList
    */
  prepend(valueOfNode) {
    const newNode = createNode(valueOfNode, this.head)
    this.head = newNode
    if (!this.tail) this.tail = newNode
    return this
  }

  /*
  1.Создать узел
  2.Поставить в head, tail
  3.Добавить узел в конец списка: переприсвоить next последнего узла, переприсвоить сам последний узел
  */
  append(valueOfNode) {
    const newNode = createNode(valueOfNode)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    }
    this.tail.next = newNode
    this.tail = newNode
    return this
  }
  /** */
  insert(value, rawIndex) {
    const index = rawIndex < 0 ? 0 : rawIndex
    if (index === 0) {
      this.prepend(value)
    } else {
      let count = 1
      let currentNode = this.head
      const newNode = new createNode(value)
      while (currentNode) {
        if (count === index) break
        currentNode = currentNode.next
        count += 1
      }
      if (currentNode) {
        newNode.next = currentNode.next
        currentNode.next = newNode
      } else {
        if (this.tail) {
          this.tail.next = newNode
          this.tail = newNode
        } else {
          this.head = newNode
          this.tail = newNode
        }
      }
    }
    return this
  }
}
