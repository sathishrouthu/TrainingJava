package practice3;
import java.util.*;

public class CricketRuns {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int x = sc.nextInt();
		int y = sc.nextInt();
		int z = sc.nextInt();
		int runs = x-y*4-z*6;
		String runsPercentage = String.format("%.2f", ( (double)runs/(double)x) * 100 );
		System.out.printf(runsPercentage);
	}

}
