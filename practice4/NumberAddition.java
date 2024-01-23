package practice4;

import java.util.*;
public class NumberAddition {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int arr[] = new int[n];
		int num = 0;
		for(int i=n-1;i>=0;i--) {
			num = num*10+sc.nextInt();;
		}
		int x = sc.nextInt();
		int res = x+num;

		int idx = n-1;
		while(res>0) {
			arr[idx]=res%10;
			res/=10;
			idx--;
		}
		System.out.println(Arrays.toString(arr));
	}

}
