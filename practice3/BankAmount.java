package practice3;
import java.util.*;

public class BankAmount {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		float amount = sc.nextFloat();
		int rate = sc.nextInt();
		int threshold = sc.nextInt();
		int years=0;
		while(amount<threshold) {
			amount = amount + amount* (float) rate/100;
//			System.out.println(amount);
			years++;
		}
		System.out.println(years);
	}
}
