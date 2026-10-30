# Spring 2027 catalog review

Reviewed on October 28, 2026, using each course's existing `catalogUrl`. A course counts as offered when its own section listing explicitly identifies Spring 2027; seat availability does not determine whether it runs.

Results: 15 courses have confirmed Spring 2027 sections and are set to true; the other 21 are set to false. No initial random values are retained as the basis for availability. Of the false values, 11 retrieved pages list no Spring 2027 section, 4 URLs return 404, PSAM 3801 follows the coordinator's report of no offering, and 5 inaccessible pages default to false under the coordinator's instruction. Access failure is not independent proof that a course is unavailable.

The seven previously unresolved pages were revisited. PSAM 3806 and PSAM 3850 again returned Spring 2026 listings, so they are false based on the opened pages despite conflicting search listings. PSAM 2806, PSAM 2845, PSAM 2860, PSAM 2890, and PSAM 3550 still returned access errors or a cache miss; they are false by the coordinator's requested fallback. The browsing service can return cached pages. Earlier direct HTTP retrieval failed because the catalog hostname could not be resolved, and browser access was unavailable.

| Course | Result | Action |
| --- | --- | --- |
| [LLSJ2100](https://courses.newschool.edu/courses/LLSJ2100/) | Spring 2027 section listed | Set/confirm offered: true |
| [PLFS2015](https://courses.newschool.edu/courses/PLFS2015/) | No Spring 2027 listing on retrieved page | Set/confirm offered: false |
| [PLVS2300](https://courses.newschool.edu/courses/PLVS2300/) | Spring 2027 section listed | Set/confirm offered: true |
| [PSAM1050](https://courses.newschool.edu/courses/PSAM1050/) | Spring 2027 section listed | Set/confirm offered: true |
| [PSAM2070](https://courses.newschool.edu/courses/PSAM2070/) | Spring 2027 section listed | Set/confirm offered: true |
| [PSAM2550](https://courses.newschool.edu/courses/PSAM2550/) | Spring 2027 section listed | Set/confirm offered: true |
| [PSAM2801](https://courses.newschool.edu/courses/PSAM2801/) | Spring 2027 section listed | Set/confirm offered: true |
| [PSAM2802](https://courses.newschool.edu/courses/PSAM2802/) | No Spring 2027 listing on retrieved page | Set/confirm offered: false |
| [PSAM2806](https://courses.newschool.edu/courses/PSAM2806/) | Page inaccessible / cache miss | Set offered: false per coordinator fallback |
| [PSAM2810](https://courses.newschool.edu/courses/PSAM2810/) | Spring 2027 section listed | Set/confirm offered: true |
| [PSAM2835](https://courses.newschool.edu/courses/PSAM2835/) | 404 Not Found | Set/confirm offered: false |
| [PSAM2845](https://courses.newschool.edu/courses/PSAM2845/) | Page inaccessible / cache miss | Set offered: false per coordinator fallback |
| [PSAM2850](https://courses.newschool.edu/courses/PSAM2850/) | Spring 2027 section listed | Set/confirm offered: true |
| [PSAM2855](https://courses.newschool.edu/courses/PSAM2855/) | No Spring 2027 listing on retrieved page | Set/confirm offered: false |
| [PSAM2860](https://courses.newschool.edu/courses/PSAM2860/) | Page inaccessible / cache miss | Set offered: false per coordinator fallback |
| [PSAM2875](https://courses.newschool.edu/courses/PSAM2875/) | 404 Not Found | Set/confirm offered: false |
| [PSAM2890](https://courses.newschool.edu/courses/PSAM2890/) | Page inaccessible / cache miss | Set offered: false per coordinator fallback |
| [PSAM2891](https://courses.newschool.edu/courses/PSAM2891/) | No Spring 2027 listing on retrieved page | Set/confirm offered: false |
| [PSAM3035](https://courses.newschool.edu/courses/PSAM3035/) | Spring 2027 section listed | Set/confirm offered: true |
| [PSAM3550](https://courses.newschool.edu/courses/PSAM3550/) | Page inaccessible / cache miss | Set offered: false per coordinator fallback |
| [PSAM3650](https://courses.newschool.edu/courses/PSAM3650/) | No Spring 2027 listing on retrieved page | Set/confirm offered: false |
| [PSAM3801](https://courses.newschool.edu/courses/PSAM3801/) | Coordinator reports no offering; page remains inaccessible to agent | Set offered: false based on coordinator review |
| [PSAM3806](https://courses.newschool.edu/courses/PSAM3806/) | Search lists Spring 2027; opened page lists Spring 2026 | Set offered: false based on opened page |
| [PSAM3808](https://courses.newschool.edu/courses/PSAM3808/) | Spring 2027 section listed | Set/confirm offered: true |
| [PSAM3810](https://courses.newschool.edu/courses/PSAM3810/) | No Spring 2027 listing on retrieved page | Set/confirm offered: false |
| [PSAM3846](https://courses.newschool.edu/courses/PSAM3846/) | No Spring 2027 listing on retrieved page | Set/confirm offered: false |
| [PSAM3850](https://courses.newschool.edu/courses/PSAM3850/) | Search lists Spring 2027; opened page lists Spring 2026 | Set offered: false based on opened page |
| [PSAM3856](https://courses.newschool.edu/courses/PSAM3856/) | 404 Not Found | Set/confirm offered: false |
| [PSAM4805](https://courses.newschool.edu/courses/PSAM4805/) | 404 Not Found | Set/confirm offered: false |
| [PSAM4830](https://courses.newschool.edu/courses/PSAM4830/) | Spring 2027 section listed | Set/confirm offered: true |
| [PSAM4855](https://courses.newschool.edu/courses/PSAM4855/) | No Spring 2027 listing on retrieved page | Set/confirm offered: false |
| [PUFY1214](https://courses.newschool.edu/courses/PUFY1214/) | Spring 2027 section listed | Set/confirm offered: true |
| [PUFY1215](https://courses.newschool.edu/courses/PUFY1215/) | Spring 2027 section listed | Set/confirm offered: true |
| [PUFY1216](https://courses.newschool.edu/courses/PUFY1216/) | Spring 2027 section listed | Set/confirm offered: true |
| [PUFY1269](https://courses.newschool.edu/courses/PUFY1269/) | Spring 2027 section listed | Set/confirm offered: true |
| [PUPH2013](https://courses.newschool.edu/courses/PUPH2013/) | No Spring 2027 listing on retrieved page | Set/confirm offered: false |
