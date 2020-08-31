var Queue = (function () {

    // initialise the queue and offset
    var queue = [];
    var offset = 0;

    this.getLength = function () {
        return (queue.length - offset);
    };

    this.isEmpty = function () {
        return (queue.length == 0);
    };

    this.add = function (item) {
        return queue.push(item);
    };

    /**
     * Gets an item and returns it. If the queue is empty then undefined is
     * returned.
     *
     * @returns {*}
     */
    this.get = function () {

        // if the queue is empty, return undefined
        if (queue.length == 0) return undefined;

        // store the item at the front of the queue
        var item = queue[offset];

        // increment the offset and remove the free space if necessary
        if (++offset * 2 >= queue.length) {
            queue = queue.slice(offset);
            offset = 0;
        }

        return item;

    };


    /**
     * Returns the item at the front of the queue (without dequeuing it). If the
     * queue is empty then undefined is returned.
     *
     * @returns {*}
     */
    this.peek = function () {

        // return the item at the front of the queue
        return (queue.length > 0 ? queue[offset] : undefined);

    };

});