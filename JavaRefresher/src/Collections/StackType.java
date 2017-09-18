/**
 * 
 */
package Collections;

import java.util.Arrays;
import java.util.List;
import java.util.Stack;

import org.junit.Assert;
import org.junit.Test;



/**
 * @author Meenakshi Paryani
 *
 */
public class StackType {

	public Stack<Integer> getStackFromList(List<Integer> numbers){
		// Define a Stack and add elements to it
		Stack<Integer> stack = new Stack<Integer>();
		stack.addAll(numbers);
		return stack;
	}

	public void printStack(Stack<Integer> stack) {
		// Display all the elements of the stack
		System.out.println("Elements of Stack are - " + stack);
	}

	public int insertToStack(Stack<Integer> stack, int element) {
		return stack.push(element);
	}

	public int getTopOfStack(Stack<Integer> stack) {
		return stack.peek().intValue();
	}

	@Test
	public void testStack() {

		Stack<Integer> stack = getStackFromList(Arrays.asList(1,2,3,4,5));

		// Check the top of the stack
		Assert.assertEquals(stack.peek().intValue(), 5);

		// Remove the top
		int removed = stack.pop();
		Assert.assertEquals(removed, 5);
		// Check the new top of the stack
		Assert.assertEquals(getTopOfStack(stack), 4);

		// Check Stack size
		Assert.assertEquals(stack.size(), 4);

		//Check Insert
		Assert.assertEquals(insertToStack(stack, 6), 6);

		//Check stack size
		Assert.assertEquals(stack.size(), 5);
	}

}
