package practice1;

import java.util.Scanner;

public class LuckyNum2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int numFours=0;
		int numSevens =0;
		int sum=0;
		while(n>0) {
			int r = n%10;
			if(r!=4 && r!=7) {
				System.out.println("Not a Winner");
				System.exit(0);;
			}
			if(r==4) numFours++;
			else numSevens++;
			sum+=r;
			n/=10;
		}
		if(numFours > numSevens && sum%2==1)
		{
			System.out.println("Winner");
		}
		else {
			System.out.println("Not a winner");
		}
	}

}
