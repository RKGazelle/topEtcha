# topEtcha

This web page will serve as a novelty Etch-A-Sketch using Hover CSS over a grid of DIVs.

The user should be able to customize the size of the grid, up to 100x100, and the canvas size should remain constant regardless of the number of DIVs. 

Pseudo:

1. Create base 16x16 grid, contained within a single centered div. Each grid unit should be an individual div.
2. Take input from user to specify grid size.
3. Utilize a for loop to draw the new grid using the user's input number.
4. Create event listeners for each div using another loop
5. Event listener should trigger a class change for the hovered div, causing its background color to change

Extra:
6. Create a reset button
7. Buttons to allow random color or a set color
8. Perhaps a setting to make it so the color fades instead of staying permanently?