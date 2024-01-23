package practice1;

import java.util.Scanner;

public class LuckyNum {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int num = n;
		int rev = 0;
		int sum = 0;
		while(n>0) {
			int r = n%10;
			sum+=r;
			rev = rev*10+r;
			
			n/=10;
		}
		if(rev==num && sum%2==0) {
			System.out.println("Winner");
		}
		else {
			System.out.println("Not a Winner");
		}

	}

}
