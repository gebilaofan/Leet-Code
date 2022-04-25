type LinkedElement = number | string;

type LinkedNode = {
  value: LinkedElement;
  next: LinkedNode | null;
};
/**
 * 节点
 *
 * @class Node
 */
class Node {
  value: LinkedElement; // 当前节点
  next: LinkedNode | null; // 下一个节点指针

  constructor(element: LinkedElement) {
    this.value = element;
    this.next = null;
  }
}

/**
 * 单向链表链表
 *  1、添加节点
 *  2、查询节点
 *  3、删除节点
 *  4、清除全部
 */
class LinkedList {
  head: LinkedNode | null; // 链表头节点
  size: number; // 链表的长度

  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   * 添加节点
   *
   * @param {*} node
   * @memberof LinkedList
   */
  appendNode(element: LinkedElement): void {
    const node = new Node(element);
    let currentNode: LinkedNode | null = this.head; // 缓存 head
    if (currentNode) {
      // 存在头节点 找到最后一个节点 将 next 指针指向当前 node
      while (currentNode && currentNode.next) {
        // 不断赋值  直到最后一个节点
        currentNode = currentNode.next;
      }
      // 此时 currentNode 为最后一个节点  将next 指向node
      currentNode.next = node;
    } else {
      // 将头节点只向当前
      this.head = node;
    }

    this.size++;
  }

  /**
   * 打印整个链表
   *
   * @memberof LinkedList
   */
  print() {
    let res = '';
    let currentNode: LinkedNode | null = this.head;
    console.log('~~~~ currentNode === null', currentNode === null);
    if (currentNode !== null) {
      while (currentNode.next) {
        res += currentNode.value + '==>';
        currentNode = currentNode.next;
      }
      // 拼接上最后一个节点
      res += currentNode.value;
      console.log(res);
    } else {
      console.log('这里什么都没有');
    }
  }
}

const link = new LinkedList();
link.appendNode('1');
link.appendNode('2');
link.appendNode('3');
link.appendNode('4');
link.toString();

console.dir(link.head);
