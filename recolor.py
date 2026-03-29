from PIL import Image

def recolor():
    img = Image.open('public/ringo-logo.png').convert('RGB')
    data = img.getdata()
    
    # We find the background color by checking pixel at (0, 0)
    bg_color = data[0]
    
    # Target color is #FFD700 => (255, 215, 0)
    target_color = (255, 215, 0)
    
    new_data = []
    
    def color_distance(c1, c2):
        return sum((a - b) ** 2 for a, b in zip(c1, c2)) ** 0.5
    
    for pixel in data:
        # Distance of ~85 is conservative enough to avoid hitting black text/taxi details
        if color_distance(pixel, bg_color) < 85:
            new_data.append(target_color)
        else:
            new_data.append(pixel)
            
    img.putdata(new_data)
    img.save('public/ringo-logo.png', 'PNG')

if __name__ == '__main__':
    recolor()
