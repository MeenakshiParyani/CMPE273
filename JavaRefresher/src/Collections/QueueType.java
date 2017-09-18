package Collections;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

import org.junit.Assert;
import org.junit.Test;



/**
 * @author Meenakshi Paryani
 *
 */
public class QueueType {

	public Queue<Integer> getQueueFromList(List<Integer> list){
		// Define a Queue and add elements to this queue
		Queue<Integer> queue = new LinkedList<>();
		queue.addAll(list);
		return queue;
	}

	public int removeFromQueue(Queue<Integer> queue) {
		return queue.remove();
	}

	public int getHeadOfQueue(Queue<Integer> queue) {
		return queue.peek();
	}

	public boolean insertInQueue(Queue<Integer> queue, int element) {
		return queue.offer(element);
	}

	@Test
	public void testQueue() {

		Queue<Integer> queue = getQueueFromList(Arrays.asList(1,2,3,4,5));

		// Check the head of the queue
		Assert.assertEquals(1, getHeadOfQueue(queue));

		// Remove the head and check
		Assert.assertEquals(1, removeFromQueue(queue));

		// Check the head of the queue
		Assert.assertEquals(2, getHeadOfQueue(queue));

		//Check queue size
		Assert.assertEquals(4, queue.size());

		//Insert a new element at the tail
		Assert.assertEquals(true, insertInQueue(queue, 6));

		//Check queue size
		Assert.assertEquals(5, queue.size());

	}

}


