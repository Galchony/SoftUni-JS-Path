function createSortedList() {

    let obj = {
        list: [],
        size: 0,
        add(element) {
            this.list.push(element);
            this.list.sort(((a, b) => a - b));
            this.size++;
        },
        remove(index) {
            this.list.sort(((a, b) => a - b));
            if (index < 0 || index >= this.list.length) {
                throw new Error;
            } else {
                this.list.splice(index, 1);
                this.size--;
            }
            

        },
        get(index) {
            this.list.sort(((a, b) => a - b));
            if (index < 0 || index >= this.list.length) {
                throw new Error;
            } else {
                return this.list[index];;
            }

        }
    }

    return obj;

}



let list = createSortedList();

list.add(10);
list.add(6);
list.add(7);
list.add(1);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);