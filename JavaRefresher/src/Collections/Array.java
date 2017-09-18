/**
 * 
 */
package Collections;

import org.junit.Assert;
import org.junit.Test;

/**
 * @author Meenakshi Paryani
 *
 */
public class Array {

	// Reverse all the elements of the array
	public void reverseArray(int[] array) {
		int length = array.length;
		for(int i=0; i<length/2; i++) {
			int temp = array[i];
			array[i] = array[length-i-1];
			array[length-i-1] = temp;
		}
	}


	@Test
	public void testReverseArray() {
		int[] array = new int[] {10,20,30,40,50};
		int length = array.length;
		reverseArray(array);
		// Check the first and last element after the reverse
		Assert.assertEquals(50, array[0]);
		Assert.assertEquals(10, array[length-1]);
	}

}
