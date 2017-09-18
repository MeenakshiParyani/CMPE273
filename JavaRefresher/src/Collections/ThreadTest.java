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
public class ThreadTest extends Thread{

	@Override
	public void run() {
		try {
			this.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void testThread() {
		ThreadTest thread = new ThreadTest();
		thread.start();
		Assert.assertEquals(true, thread.isAlive());
	}
	
	

}
