
class DynamicArray {
    constructor(capacity = 10) {
      this.size = capacity;
      this.length = 0;
      this.array = new Array(capacity);
    }
  
    add(data) {
      if (this.length === this.size) {
        this.growSize();
      }
      this.array[this.length] = data;
      this.length++;
    }
  
    remove() {
      if (this.length === 0) {
        return;
      }
      this.length--;
      delete this.array[this.length];
    }
  
    removeAt(index) {
      if (index < 0 || index >= this.length) {
        return;
      }
      for (let i = index; i < this.length - 1; i++) {
        this.array[i] = this.array[i + 1];
      }
      this.length--;
      delete this.array[this.length];
    }
  
    growSize() {
      const newSize = this.size * 2;
      const newArray = new Array(newSize);
      for (let i = 0; i < this.length; i++) {
        newArray[i] = this.array[i];
      }
      this.array = newArray;
      this.size = newSize;
    }
  
    set(index, data) {
      if (index < 0 || index >= this.length) {
        return;
      }
      this.array[index] = data;
    }
  
    clean() {
      this.length = 0;
      this.array = new Array(this.size);
    }
  
    contains(data) {
      for (let i = 0; i < this.length; i++) {
        if (this.array[i] === data) {
          return true;
        }
      }
      return false;
    }
  
    isEmpty() {
      return this.length === 0;
    }
  }
  
  // Пример использования
  
  const arr = new DynamicArray(5);
  console.log(arr.isEmpty()); // true
  
  arr.add(1);
  arr.add(2);
  arr.add(3);
  console.log(arr.contains(3)); // true
  
  arr.remove();
  console.log(arr.contains(3)); // false
  
  arr.set(0, 5);
  console.log(arr.contains(5)); // true
  
  arr.removeAt(1);
  console.log(arr.contains(2)); // false
  
  arr.clean();
  console.log(arr.isEmpty()); // true