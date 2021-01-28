//
interface IStack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode | undefined;
};

class StackImpl implements IStack {
  private _head?: StackNode;

  private _size: number = 0;

  get size(): number {
    return this._size;
  }

  push(value: string): void {
    if (this.size >= this.capacity) throw new Error('Stack is full');
    const newStackNode: StackNode = {
      value,
      next: this._head,
    };
    this._head = newStackNode;
    this._size++;
  }

  pop(): string {
    // null == undefined, null !== undefined
    if (this._head == null) throw new Error('Stack is empty');
    const node = this._head;
    this._head = node.next;
    this._size--;
    return node.value;
  }

  constructor(private capacity: number) {}
}

const stack: StackImpl = new StackImpl(10);
stack.push('Ellie 1');
stack.push('Bob 1');
stack.push('Steve 1');
while (stack.size !== 0) {
  console.log(stack.pop());
}
stack.pop();
