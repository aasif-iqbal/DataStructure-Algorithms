/*
    Implement queue’s enqueue and dequeue operations using two stacks. 
    Logic:
       1. The queue is first-in-first-out and a stack is last in-first-out phenomena. Hence, 
          the main difference between these two data structures is that pop() in reverse order.
       2. Use one stack to store all the pushed elements and use the second stack to store elements 
          in reverse the order. (by popping s1 and pushing the elements on to s2).
       3. We will push elements to s1 and pop from s2.
 */
   
'use strict';

function Queue () {
  this.pushS = new Stack();
  this.popS = new Stack();
}

Queue.prototype.enqueue = function (val) {
  this.pushS.push(val);
};

Queue.prototype.dequeue = function () {
  var poping = this.popS;
  var pushing = this.pushS;

  if (poping.top) {
    var deq = poping.pop();
    console.log('Dequeing ' + deq + ' from stack.');
    return deq;
  }

  while (pushing.top) {
    poping.push(pushing.pop());
  }
};


var q1 = new Queue();
q1.enqueue(3);
q1.enqueue(4);
q1.enqueue(5);
q1.enqueue(6);
q1.enqueue(7);
q1.dequeue();
q1.dequeue();
q1.dequeue();
console.log('Current stat of the Queue is stored saved in the popS.');
console.log(q1);