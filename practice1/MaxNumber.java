package practice1;

import java.util.Scanner;

public class MaxNumber {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int i=1;
		for(i=1;i<n;i++) {
			int sum = i*(i+1)/2;
			if(sum>=n) break;
		}
		System.out.println(i-1);

	}

}
