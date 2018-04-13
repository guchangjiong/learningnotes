import aircv as aim_search

img_main = aim_search.imread('main.png')#主图
img_aim = aim_search.imread('aim.png')#主图中期望被查找到的图像
pos = aim_search.find_template(im_main, im_aim)
x,y = pos["result"][0],pos["result"][1]#获取到的，对应的坐标值。
