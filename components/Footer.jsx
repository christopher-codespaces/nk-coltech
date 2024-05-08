import React from 'react'

function Footer() {
  return (
    <footer class="bg-white text-black py-6 px-16 font-sans tracking-wide">
      <div class="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
        <p class="text-[15px] leading-loose">
          © 2024
          <a
            href=""
            target="_blank"
            class="hover:underline mx-1">
            Nk ColdTech
          </a>
          All Rights Reserved.
        </p>

        <ul class="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
          <li>
            <a
              href="javascript:void(0)"
              class="text-[15px] hover:text-indigo-200">
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              class="text-[15px] hover:text-indigo-200">
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              class="text-[15px] hover:text-indigo-200">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer
