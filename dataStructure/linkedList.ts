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
  print(): void {
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

  /**
   * 向链表特定位置插入一个新的元素
   *
   * @param {LinkedElement} element
   * @param {number} position
   * @return {*}  {boolean}
   * @memberof LinkedList
   */
  insert(element: LinkedElement, position: number): boolean {
    let currentNode = this.head;
    const node = new Node(element);
    // 存在头节点
    if (currentNode !== null) {
      // 判断插入的位置是否在范围内  0 < position > this.size

      if (position < 0 && position > this.size) {
        console.log(`当前位置${position}无法插入`);
        return false;
      }
      // 查找节点
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    } else {
      // 不存在头节点  直接将头节点指向当前
      this.head = node;
    }

    this.size++;
    return true;
  }

  /**
   * 返回元素在链表中的索引
   *
   * @param {LinkedElement} element
   * @return {*}  {number}
   * @memberof LinkedList
   */
  indexOf(element: LinkedElement): number {
    return -1;
  }

  /**
   * 根据索引去获取链表中的元素  如果有则返回该节点 没有返回undefined
   *
   * @param {number} index
   * @return {*}  {(LinkedNode | undefined)}
   * @memberof LinkedList
   */
  getElementAt(index: number): LinkedNode | undefined {
    // 索引边界判断
    // if (index < 0 && index > this.size && this.head === null) return undefined;
    if (index >= 0 && index <= this.size && this.head !== null) {
      let current: LinkedNode = this.head;
      while (index && current.next) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }

  /**
   * 移除某个节点
   *
   * @param {LinkedElement} element
   * @memberof LinkedList
   */
  // remove(element: LinkedElement): void {}

  /**
   * 根据position移除某个节点
   *
   * @param {number} position
   * @memberof LinkedList
   */
  // removeAt(position: number): void {}

  /**
   * 查看链表是否为空 长度大于0 返回 false  长度小于 0 返回 true
   *
   * @return {*}  {boolean}
   * @memberof LinkedList
   */
  isEmpty(): boolean {
    return false;
  }
}

const link = new LinkedList();
link.appendNode('1');
link.appendNode('2');
link.appendNode('3');
link.appendNode('4');
link.toString();

console.dir(link.head);
