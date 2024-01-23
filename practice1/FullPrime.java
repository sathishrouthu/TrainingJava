package practice1;

import java.util.Scanner;

public class FullPrime {
	public static boolean isPrime(int n) {
		if(n<2) return false;
		for(int i=2;i<n;i++) {
			if(n%i==0) return false;
		}
		return true;
	}
	public static boolean isFullPrime(int n) {
		if(!isPrime(n)) return false;
		while(n>0) {
			int d = n%10;
			if(!(n==2 || n==3 || n==5 || n==7)) return false;
			n/=10;
		}
		return true;
	}
	public static void main(String args[]) {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = sc.nextInt();
		boolean found = false;
		
		for(int i=a+1;i<b;i++) {
			if(isFullPrime(i)) {
				found=true;
				System.out.println(i);
			}
		}
		if(!found) System.out.println(-1);
		
	}
}
