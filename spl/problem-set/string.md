
# String

## 01
```c:line-numbers
#include <stdio.h>

int main() {
    char ch = getchar();
    if (ch >= 'A' && ch <= 'Z')
        printf("%c\n", ch + ' ');
    else
        puts("Wrong input");
}
```

## 02
```c:line-numbers
#include <stdio.h>

int main() {
    char ch = getchar();

    if (ch >= 'A' && ch <= 'Z')
        printf("%c\n", ch + ' ');
    else if (ch >= 'a' && ch <= 'z')
        printf("%c\n", ch - ' ');
    else
        puts("Wrong input");
}
```

## 03
```c:line-numbers
#include <stdio.h>

int main() {
    char ch = getchar();

    if (ch >= '0' && ch <= '9')
        printf("%d\n", ch - '0');
    else
        puts("Wrong input");
}
```

## 04
```c:line-numbers
#include <stdio.h>

int main() {
    char a[100];
    int alen;
    for (alen = 0; (a[alen] = getchar()) != '\n'; alen++);
    printf("%d\n", alen);
}
```

## 05
```c:line-numbers
#include <stdio.h>

int main() {
    char a[100];
    int alen;
    for (alen = 0; (a[alen] = getchar()) != '\n'; alen++);
    a[alen] = '\0';

    for (int i = 0; i < alen; i++)
        if (a[i] >= 'A' && a[i] <= 'Z')
            a[i] += ' ';

    puts(a);
}
```

## 06
```c:line-numbers
#include <stdio.h>

int main() {
    char a[100];
    int alen;
    for (alen = 0; (a[alen] = getchar()) != '\n'; alen++);
    a[alen] = '\0';

    for (int i = 0; i < alen; i++)
        if (a[i] >= 'A' && a[i] <= 'Z')
            a[i] += ' ';
        else if (a[i] >= 'a' && a[i] <= 'z')
            a[i] -= ' ';

    puts(a);
}
```

## 07
```c:line-numbers
#include <stdio.h>

int main() {
    char a[100];
    int alen;
    for (alen = 0; (a[alen] = getchar()) != '\n'; alen++);
    a[alen] = '\0';

    for (int i = 0; i < alen/2; i++)
        if (a[i] != a[alen-1 - i]) {
            puts("Not palindrome");
            return 0;
        }

    puts("Palindrome");
}
```

## 08

Disclaimer: Sample output does not match the instructions given. The code
follows the sample output.

```c:line-numbers
#include <stdio.h>

int strcmpp(char *a, char *b) {
    for (; *a == *b && *b; a++, b++);
    return *a - *b;
}

int main() {
    char a[100], b[100];
    scanf("%[^\n]%*c", a);
    scanf("%[^\n]%*c", b);

    int c = strcmpp(a, b);
    if (c < 0)
        puts(a);
    else if (c > 0)
        puts(b);
    else
        puts("Both equal");
}
```

## 09
```c:line-numbers
#include <stdio.h>

int main() {
    char a[100];
    int alen;
    for (alen = 0; (a[alen] = getchar()) != '\n'; alen++);
    a[alen] = '\0';

    char b[alen+1];
    for (int i = 0; i <= alen; i++)
        b[i] = a[i];

    puts(b);
}
```

## 10
```c:line-numbers
#include <stdio.h>

int main() {
    char a[100];
    int alen;
    for (alen = 0; (a[alen] = getchar()) != '\n'; alen++);
    a[alen] = '\0';

    char b[100];
    int blen;
    for (blen = 0; (b[blen] = getchar()) != '\n'; blen++);
    b[blen] = '\0';

    for (int i = 0; i <= blen; i++)
        a[alen+i] = b[i];

    puts(a);
}
```

## 11
```c:line-numbers
#include <stdio.h>

int main() {
	char s[100], t[100];
	int sn, tn;
	for (sn = 0; (s[sn] = getchar()) != '\n'; sn++)
		;
	s[sn] = '\0';

	for (tn = 0; (t[tn] = getchar()) != '\n'; tn++)
		;
	t[tn] = '\0';

	for (char *p = s; *p; p++) {
		char *q, *r;
		for (q = p, r = t; *q && *r && *q == *r; q++, r++)
			;
		if (*r == '\0') {
			puts("Substring");
			return;
		}
	}

	puts("Not substring");
}
```

## 12
```c:line-numbers
#include <stdio.h>

int main() {
    char a[100];
    int alen;
    for (alen = 0; (a[alen] = getchar()) != '\n'; alen++);
    a[alen] = '\0';

    for (int i = 0; i < alen; i++)
        if (a[i] == ' ')
            putchar('\n');
        else
            putchar(a[i]);
    putchar('\n');
}
```

