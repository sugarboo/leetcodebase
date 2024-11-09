import { describe, expect, it } from 'vitest'
import { largestCombination } from '../../code/medium/02275-Largest-Combination-With-Bitwise-AND-Greater-Than-Zero'

describe('largest combination with bitwise AND greater than zero test case 🥇', () => {
  it('should return the expected result', () => {
    const candidates = [16, 17, 71, 62, 12, 24, 14]
    const result = largestCombination(candidates)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('largest combination with bitwise AND greater than zero test case 🥈', () => {
  it('should return the expected result', () => {
    const candidates = [8, 8]
    const result = largestCombination(candidates)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('largest combination with bitwise AND greater than zero test case 🥉', () => {
  it('should return the expected result', () => {
    const candidates = [2902691, 5795304, 6498538, 1107154, 3738293, 98410, 3100740, 3426513, 3819969, 2927409, 9470990, 4682704, 4309602, 203465, 9498164, 6165150, 6570823, 8253453, 959683, 7967139, 1785588, 1659810, 937808, 2033944]
    const result = largestCombination(candidates)
    const expected = 14
    expect(result).toBe(expected)
  })
})

describe('largest combination with bitwise AND greater than zero test case 🏅', () => {
  it('should return the expected result', () => {
    const candidates = [775, 225, 855, 244, 485, 441, 605, 561, 606, 640, 153, 640, 488, 683, 195, 855, 860, 13, 429, 922, 388, 375, 783, 950, 156, 593, 443, 90, 109, 765, 820, 549, 333, 360, 659, 480, 500, 355, 940, 844, 659, 795, 397, 456, 835, 953, 220, 235, 131, 866, 673, 119, 105, 925, 103, 468, 647, 285, 486, 317, 234, 110, 541, 263, 494, 699, 455, 389, 789, 420, 108, 321, 421, 177, 601, 647, 141, 897, 433, 444, 727, 866, 534, 665, 536, 214, 552, 587, 407, 260, 531, 901, 725, 53, 36, 199, 718, 988, 185, 915, 469, 803, 918, 410, 822, 789, 505, 442, 228, 255, 395, 199, 353, 643, 190, 618, 924, 594, 254, 105, 220, 941, 458, 380, 254, 881, 849, 1000, 147, 997, 726, 354, 535, 151, 971, 981, 529, 45, 804, 230, 486, 82, 148, 391, 91, 12, 344, 93, 453, 1000, 807, 661, 61, 455, 648, 615, 277, 302, 854, 574, 598, 799, 688, 714, 506, 593, 841, 936, 161, 66, 758, 787, 53, 957, 252, 871, 23, 373, 13, 301, 157, 617, 844, 942, 338, 91, 496, 831, 244, 559, 978, 803, 659, 50, 521, 396, 25, 805, 596, 934, 254, 405, 210, 754, 355, 465, 526, 556, 645, 440, 618, 637, 859, 451, 583, 857, 44, 712, 903, 433, 977, 835, 44, 690, 797, 1, 195, 631, 790, 984, 123, 968, 280, 403, 735, 365, 963, 458, 15, 663, 616, 618, 113, 434, 636, 276, 263, 188, 577, 21, 222, 372, 446, 653, 775, 341, 493, 765, 203, 947, 620, 727, 819, 194, 762, 256, 62, 1000, 166, 813, 94, 998, 543, 552, 127, 712, 384, 876, 87, 862, 560, 43, 250, 206, 971, 97, 321, 263, 959, 627, 463, 13, 113, 908, 516, 905, 119, 821, 235, 840, 429, 598, 946, 597, 693, 350, 777, 730, 204, 354, 614, 936, 36, 352, 780, 473, 391, 187, 755, 984, 880, 607, 409, 417, 999, 592, 851, 226, 696, 604, 119, 330, 893, 773, 608, 980, 993, 249, 226, 60, 302, 732, 425, 76, 59, 184, 549, 421, 759, 22, 742, 496, 224, 689, 904, 138, 175, 504, 938, 788, 580, 788, 134, 318, 200, 245, 668, 423, 598, 151, 155, 676, 162, 781, 95, 994, 873, 364, 303, 509, 622, 339, 112, 260, 797, 315, 359, 393, 64, 755, 290, 77, 279, 785, 897, 132, 130, 38, 877, 913, 70, 884, 259, 335, 417, 477, 462, 48, 72, 338, 546, 377, 161, 608, 828, 707, 826, 644, 124, 566, 434, 43, 940, 91, 153, 196, 108, 764, 131, 336, 285, 649, 711, 104, 402, 381, 927, 605, 533, 728, 873, 426, 473, 993, 809, 476, 363, 25, 567, 993, 794, 214, 787, 894, 78, 901, 213, 568, 288, 375, 464, 380, 91, 367, 538, 760, 100, 855, 920, 201, 399, 491, 717, 644, 489, 337, 575, 812, 479, 626, 444, 263, 742, 331, 843, 614, 691, 312, 132, 165, 562, 218, 86, 520, 406, 206, 85, 491, 762, 998, 809, 614, 72, 987, 578, 624, 173, 582, 965, 24, 184, 488, 610, 841, 96, 169, 71, 930, 875, 98, 869, 646, 771, 941, 494, 393, 62, 596, 399, 479, 496, 594, 546, 449, 120, 758, 673, 302, 436, 535, 787, 177, 486, 851, 285, 314, 945, 948, 764, 299, 793, 886, 149, 491, 672, 377, 510, 518, 40, 30, 283, 500, 783, 500, 379, 316, 157, 225, 750, 509, 88, 928, 374, 103, 547, 23, 543, 447, 658, 913, 429, 155, 327, 775, 268, 623, 594, 934, 950, 99, 846, 291, 240, 218, 182, 826, 16, 184, 626, 912, 100, 472, 752, 142, 848, 123, 552, 428, 93, 971, 353, 529, 70, 334, 51, 422, 531, 359, 926, 366, 428, 179, 982, 777, 722, 61, 845, 122, 159, 669, 212, 825, 512, 551, 132, 275, 975, 11, 963, 490, 291, 572, 787, 661, 9, 322, 980, 730, 118, 378, 887, 168, 775, 917, 649, 112, 482, 221, 620, 526, 677, 769, 266, 950, 673, 280, 151, 183, 464, 374, 435, 575, 388, 739, 728, 782, 682, 619, 454, 886, 674, 112, 6, 217, 913, 960, 297, 251, 23, 839, 434, 569, 12, 788, 221, 982, 898, 31, 468, 902, 301, 479, 791, 950, 442, 257, 803, 652, 674, 707, 882, 436, 740, 822, 931, 950, 3, 172, 349, 194, 546, 880, 823, 294, 164, 996, 769, 424, 765, 166, 477, 799, 852, 658, 958, 358, 834, 891, 936, 177, 823, 916, 957, 226, 601, 394, 715, 141, 951, 933, 322, 253, 471, 761, 567, 538, 976, 869, 751, 219, 739, 822, 947, 654, 691, 477, 450, 675, 717, 664, 536, 482, 688, 869, 682, 221, 916, 950, 104, 853, 706, 507, 830, 485, 439, 978, 204, 282, 187, 330, 216, 58, 413, 312, 653, 239, 444, 86, 16, 481, 752, 824, 350, 595, 386, 274, 17, 29, 419, 112, 198, 978, 668, 262, 574, 214, 188, 16, 944, 796, 889, 771, 757, 1000, 261, 693, 598, 418, 691, 301, 242, 321, 714, 568, 472, 108, 313, 615, 1, 142, 932, 596, 365, 657, 810, 562, 359, 490, 339, 255, 619, 643, 920, 196, 409, 340, 592, 491, 246, 399, 470, 521, 51, 1000, 774, 532, 560, 302, 67, 90, 473, 255, 858, 556, 666, 763, 16, 82, 270, 910, 452, 24, 956, 851, 862, 472, 537, 480, 341, 506, 497, 669, 856, 915, 153, 60, 183, 204, 215, 707, 232, 594, 111, 699, 980, 760, 591, 950, 932, 387, 994, 228, 134, 291, 834, 668, 92, 34, 830, 340, 161, 148, 840, 786, 211, 540, 445, 618, 309, 500, 98, 506, 382, 546, 647, 99, 604, 657, 315, 922, 900, 959, 27, 328, 938, 498, 770, 692, 406, 868, 734, 578, 671, 198, 322, 469, 193, 418, 832, 406, 85, 43, 18, 933, 111, 467, 890, 735, 321, 796, 513, 358, 761, 501, 195, 463, 466, 102, 955, 380, 253, 229, 986, 63, 694, 968, 655, 160, 554, 250, 40, 136, 274, 265, 953, 922, 189, 411, 250, 696]
    const result = largestCombination(candidates)
    const expected = 529
    expect(result).toBe(expected)
  })
})