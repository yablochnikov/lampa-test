import {
  Collapsible,
  CollapsibleButton,
  CollapsibleContent,
} from './components';

function App() {
  return (
    <div class='p-4 m-auto text-white w-screen h-screen'>
      <h1 class='text-2xl mb-4'>Collapsible Component</h1>
      <Collapsible defaultOpen={false}>
        {({ isOpen, toggle }) => {
          const contentId = 'collapsible-content';

          return (
            <>
              <CollapsibleButton
                onClick={toggle}
                aria-expanded={isOpen()}
                aria-controls={contentId}
                class='px-4 py-2 bg-stone-900 text-white rounded border border-orange-600 hover:bg-orange-600 focus:border-orange-600 transition-all'
              >
                Toggle
              </CollapsibleButton>

              <CollapsibleContent
                as='div'
                id={contentId}
                isOpen={isOpen()}
                class='mt-4 text-white rounded flex justify-center overflow-hidden bg-orange-600'
                animationProperties='transition-all duration-300 ease-in-out'
                onOpenStyles='p-9'
                onCloseStyles='h-0 p-0'
              >
                Content
              </CollapsibleContent>
            </>
          );
        }}
      </Collapsible>
    </div>
  );
}

export default App;
