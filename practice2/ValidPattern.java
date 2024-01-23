package practice2;
import java.util.Scanner;

public class ValidPattern {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int p = sc.nextInt();
		int x1=sc.nextInt();
		int y1 = sc.nextInt();
		int count=1;
		int totalCount = n*n;
		boolean invalid=false;
		for(int i=1;i<p;i++) {
			int x2 = sc.nextInt();
			int y2 = sc.nextInt();
			if( Math.abs(x2-x1) >=2 || Math.abs(y2-y1) >= 2 ) {
				invalid=true;
				break;
			}
			count++;
			x1=x2;
			y1=y2;
		}
		if(!invalid) {
			double per = ((double)count / (double)totalCount)*100;
			if(per>75) 
				System.out.println("Excellent");
			else if(per>50) 
				System.out.println("Good");
			else if(per>25)
				System.out.println("Average");
			else
				System.out.println("Poor");
			
		}
		else {
			System.out.println("Invalid");
		}
	}

}
