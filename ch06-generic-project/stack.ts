//
interface IStack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements IStack<T> {
  private head?: StackNode<T>;
  private _size: number = 0;

  get size() {
    return this._size;
  }

  push(value: T) {
    if (this.size === this.capacity) throw new Error('Stack is full!');
    const node: StackNode<T> = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
    if (this.head == null) throw new Error('Stack is empty!');
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }

  constructor(private capacity: number) {}
}

const stack = new StackImpl<string>(10);
stack.push('Ellie 1');
stack.push('Bob 2');
stack.push('Steve 3');
console.log(stack);
while (stack.size !== 0) {
  console.log(stack.pop());
}
