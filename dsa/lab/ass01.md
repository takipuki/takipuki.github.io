
# Assignment - 01

## 01
```cpp
#include <stdio.h>

int *binary_search(int *a, int *b, int k) {
	int *i = a;
	for (int j = (b-a)/2; j >= 1; j /= 2) { // half jump distance
		while (i+j < b && *(i+j) <= k) i += j; // keep jumping forward
	}
	return *i == k ? i : i+1;
}

int main() {
	int n; scanf("%d", &n);
	int ar[n];
	for (int i = 0; i < n; i++)
		scanf("%d", ar+i);
	int k; scanf("%d", &k);

	printf("%d\n", binary_search(ar, ar+n, k) - ar);
}
```


## 02
```cpp
#include <stdio.h>

int *lower_bound(int *a, int *b, int k) {
	int *mid = a + (b-a)/2;
	for (; a < b; mid = a + (b-a)/2) {
		if (k <= *mid) b = mid;
		else if (k > *mid) a = mid+1;
	}
	return mid;
}

int *upper_bound(int *a, int *b, int k) {
	int *mid = a + (b-a)/2;
	for (; a < b; mid = a + (b-a)/2) {
		if (k < *mid) b = mid;
		else if (k >= *mid) a = mid+1;
	}
	return mid;
}

int main() {
	int n; scanf("%d", &n);
	int ar[n];
	for (int i = 0; i < n; i++)
		scanf("%d", ar+i);
	int k; scanf("%d", &k);

	int *a = lower_bound(ar, ar+n, k);
	int *b = upper_bound(ar, ar+n, k);
	if (a == b) printf("-1 -1\n");
	else printf("%d %d\n", a-ar, b-1-ar);
}
```


## 03
```cpp
#include <stdio.h>

int main() {
	int ar[26] = {0}, br[26] = {0};
	for (char ch; (ch = getchar()) != '\n' && ch != EOF; ) {
		ar[ch - 'a']++;
	}

	for (char ch; (ch = getchar()) != '\n' && ch != EOF; ) {
		br[ch - 'a']++;
	}

	for (int i = 0; i < 26; i++) {
		if (ar[i] != br[i]) {
			puts("NO");
			return 0;
		}
	}
	puts("YES");
}
```


## 04
```cpp
#include <stdio.h>

int main() {
	int n; scanf("%d", &n);
	int ar[n+1] = {0}, a;
	for (int i = 0; i < n; i++) {
		scanf("%d", &a);
		ar[a]++;
	}

	for (int i = 0; i <= n; i++) {
		if (!ar[i]) {
			printf("%d\n", i);
			return 0;
		}
	}
}
```


## 05
```cpp
#include <stdio.h>

int main() {
	int n; scanf("%d", &n);
	int ar[n];
	for (int i = 0; i < n; i++)
		scanf("%d", ar+i);

	int i = -1;
	for (int j = n-1; j >= 1; j /= 2) {
		while (i+j < n && ar[i+j] == i+j) i += j;
	}

	printf("%d\n", i+1);
}
```


## 06
```cpp
#include <stdio.h>

int main() {
	int n; scanf("%d", &n);

	int i = 1;
	for (int j = n/2; j >= 1; j /= 2) {
		while ((i+j)*(i+j) <= n) i += j;
	}

	puts(i*i == n ? "YES" : "NO");
}
```


## 07
```cpp
#include <stdio.h>

float abs(float f) {
	return f < 0 ? -f : f;
}

float sqrt(float n, float guess) {
	if (abs(guess*guess - n) <= 10e-4)
		return guess;
	return sqrt(n, (guess + n/guess)/2);
}

int main() {
	float n; scanf("%f", &n);
	printf("%.3f\n", sqrt(n, n/2));
}
```

