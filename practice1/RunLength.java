package practice1;

import java.util.Scanner;

public class RunLength {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int idx=0;
		int[] arr = new int[n];
		while(n>0) {
			arr[idx++] = sc.nextInt();
			n--;
		}
		int maxLength=0;
		int startIndex=0;
		for(int i=0;i<arr.length;i++) {
			int l=0;
			if(arr[i]%2==0) {
				
				for(int j=i;j<arr.length;j++) {
					if(arr[j]%2==0) {
						l++;
					}
					else break;
				}
			}
			if(l>maxLength) {
				maxLength=l;
				startIndex = i;
			}
		}
		System.out.println(maxLength);
		System.out.println(startIndex);
	}
}
