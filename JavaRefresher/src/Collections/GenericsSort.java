/**
 * 
 */
package Collections;

import java.util.Comparator;
import java.util.Stack;

/**
 * @author Meenakshi Paryani
 *
 */
public class GenericsSort<T> {
	
	public <T extends Comparable<? super T>>Stack<T>	sort(Stack<T> stack){
		stack.sort(new Comparator<T>() {

			@Override
			public int compare(T o1, T o2) {
				return o1.compareTo(o2);
			}

		});
		return stack;
	}
	
}
