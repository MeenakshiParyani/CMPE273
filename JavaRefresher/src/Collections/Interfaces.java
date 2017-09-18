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
public class Interfaces {
	
	public interface Bird{
		String fly();
	}
	
	class Parrot implements Bird{

		@Override
		public String fly() {
			return "Parrot Fly";
		}
		
	}
	
	class Cuckoo implements Bird{

		@Override
		public String fly() {
			return "Cuckoo Fly";
		}
		
	}
	
	@Test
	public void testInterfaces(){
		Bird bird1 = new Parrot();
		Bird bird2 = new Cuckoo();
		Assert.assertEquals(Parrot.class, bird1.getClass());
		Assert.assertEquals(Cuckoo.class, bird2.getClass());
		Assert.assertEquals("Parrot Fly", bird1.fly());
		Assert.assertEquals("Cuckoo Fly", bird2.fly());
	}

}
