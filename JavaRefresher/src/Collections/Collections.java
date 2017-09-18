/**
 * 
 */
package Collections;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.StringTokenizer;

import org.junit.Assert;
import org.junit.Test;



/**
 * @author Meenakshi Paryani
 *
 */
public class Collections {
	
	public ArrayList<String> getDuplicateWords(String sentence){
		// Using LinkedHashmap as it preserves the order
		Map<String,Integer> wordMap = new LinkedHashMap<String, Integer>();
		StringTokenizer stringTokenizer = new StringTokenizer(sentence);
		while(stringTokenizer.hasMoreTokens()) {
			String word = stringTokenizer.nextToken();
			if(wordMap.containsKey(word)) {
				wordMap.put(word, wordMap.get(word)+1);
			}else {
				wordMap.put(word, 1);
			}
		} 
		return getDuplicateWords(wordMap);
	}

	private ArrayList<String> getDuplicateWords(Map<String, Integer> wordMap) {
		ArrayList<String> duplicateWords = new ArrayList<>();
		wordMap.forEach((key,value) -> {
			if(value>1)
				duplicateWords.add(key);
		});
		return duplicateWords;
	}
	
	@Test
	public void testGetDuplicateWords() {
		String sentence = "I have one hell of  a difficult task  that I have to finish in one day";
		ArrayList<String> expectedResult = new ArrayList<>(Arrays.asList("I","have", "one"));
		ArrayList<String> actualResult = getDuplicateWords(sentence);
		Assert.assertEquals(expectedResult, actualResult);
	}

}
