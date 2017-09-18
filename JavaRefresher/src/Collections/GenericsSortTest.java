/**
 * 
 */
package Collections;

import java.util.Stack;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;



/**
 * @author Meenakshi Paryani
 *
 */
public class GenericsSortTest {

	/**
	 * @throws java.lang.Exception
	 */
	@Before
	public void setUp() throws Exception {
	}

	/**
	 * @throws java.lang.Exception
	 */
	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testGenericsSortInteger() {
		Stack<Integer> intStack = new Stack<Integer>();
		intStack.push(39);
		intStack.push(10);
		intStack.push(46);
		intStack.push(100);
		intStack.push(89);
		GenericsSort<Integer> genericsSort = new GenericsSort<Integer>();
		genericsSort.sort(intStack);
		Assert.assertArrayEquals(new Integer[] {10, 39, 46, 89, 100}, intStack.toArray());
	}
	
	@Test
	public void testGenericsSortString() {
		Stack<String> stringStack = new Stack<String>();
		stringStack.push("kent");
		stringStack.push("dent");
		stringStack.push("rent");
		stringStack.push("pent");
		stringStack.push("bent");
		GenericsSort<Integer> genericsSort = new GenericsSort<Integer>();
		genericsSort.sort(stringStack);
		Assert.assertArrayEquals(new String[] {"bent", "dent", "kent", "pent", "rent"}, stringStack.toArray());
	}

}
